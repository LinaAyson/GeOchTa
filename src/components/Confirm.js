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

    // confirmed true or false 
    return (
        <div className="flex flex-col h-full overflow-scroll bg-white bg-opacity-80">
            <Navbar />

            <div className="mt-8">
                <div className="py-2 mx-4 rounded-lg shadow-lg bg-neutral-100">
                    <div className="my-3 text-3xl font-bold text-black">
                        <p>Så här går du tillväga</p>
                    </div>
                    <ul className="p-3 ml-5 text-left list-disc" id="confirm">
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
                            acceptTerms: Yup.bool().oneOf([true], <p className="italic font-semibold text-red-800">Du måste bekräfta att du förstått instruktionerna</p>)
                        })}
                        onSubmit={() => navigateConfirm()}
                    // lägg in funktion put till databasen och navigate
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div className="mb-8 form-group form-check">
                                    <Field type="checkbox" name="acceptTerms" className={'form-check-input ' + (errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : '')} />
                                    <label htmlFor="acceptTerms" className="ml-2 form-check-label">Jag har läst och förstått instruktionerna
                                    </label>
                                    <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />
                                </div>

                                <div className="form-group">
                                    <button type="submit" className='knapp'>
                                        Bekräfta villkor
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className="flex">
                    <img className="mx-auto" id="recycle" src={require('../assets/recycle.png')} />
                </div>

            </div>

        </div>);
}
export default Confirm;