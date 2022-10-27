import Navbar from "./Navbar";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';



const Confirm = () => {
    const navigate = useNavigate();
    async function termsConfirmed() {
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ termsConfirmed: true })
        };
        const response = await fetch('http://localhost:3001/parents/0', requestOptions);
        const data = await response.json();

    }

    const navigateConfirm = () => {
        termsConfirmed();
        navigate('/OrderApproved');
    };


    // confirmed true eller false 
    return (
        <div className="flex flex-col bg-white h-full bg-opacity-80">
            <Navbar />

            <div className="mt-8">
                <div className="bg-orange-100 mx-4 shadow-lg py-2 rounded-lg">
                    <div className="text-black text-3xl font-bold my-3">
                        <p>Så här går du tillväga</p>
                    </div>
                    <ul className="text-left p-3 list-disc ml-5">
                        <li>Packa ner kläderna i samma kartong som de kom i.</li>
                        <li>Returnera kartongen på Nacka kommun.</li>
                        <li>Vid inlämning av ditt paket sker utlämning av nytt paket.</li>
                        <li>Du får en notis i appen när ditt gamla och nya paket registrerats.</li>
                    </ul>
                    <Formik
                        initialValues={{
                            acceptTerms: false
                        }}
                        validationSchema={Yup.object().shape({
                            acceptTerms: Yup.bool().oneOf([true], 'Du måste bekräfta att du förstått instruktionerna')
                        })}
                        onSubmit={() => navigateConfirm()}
                    // lägg in funktion put till databasen och navigate
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div className="form-group form-check mb-8">
                                    <Field type="checkbox" name="acceptTerms" className={'form-check-input ' + (errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : '')} />
                                    <label htmlFor="acceptTerms" className="form-check-label ml-2">Jag har läst och förstått instruktionerna
                                    </label>
                                    <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className='bg-orange-400 text-2xl rounded-lg px-16 py-2 text-white'>
                                        Bekräfta villkor
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>

                </div>

            </div >

        </div >);
}
export default Confirm;