import React from "react";
import { useState } from "react";

const PasswordConfirm = ({ min }) => {
    const [pass1, setPass1] = useState('')
    const [pass2, setPass2] = useState('')
    const regExpLetters = /[A-Z]/;
    const regExpDigit = /[0-9]/;
    const regExpSymbols = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;


    function hasDigitUpper(value) {
        const str = value.split('');
        return (str.some(symbol => regExpDigit.test(symbol)) && str.some(symbol => regExpLetters.test(symbol)));
    }

    function hasSymbols(value) {
        return regExpSymbols.test(value);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Password Confirm</h2>

            <label htmlFor='p1' style={{ textAlign: 'left', display: "inline-block" }}>
                <pre> {
                    `Цей пароль повинен бути:
* не менш аніж ${min} символи,
* мати щонайменше: 
^ 1 Велику літеру 
^ 1 цифру`
                }
                </pre>
                <input
                    style={{ color: pass1.length >= min && hasDigitUpper(pass1) ? 'inherit' : 'red' }}
                    type="password"
                    value={pass1}
                    id="p1"
                    onChange={el1 => setPass1(el1.target.value)} 
                />
            </label>
            {/* <br /> */}
            <label htmlFor='p2' style={{ textAlign: 'left', display: "inline-block" }}>
                <pre> {
                    `А цей пароль:
* не менш аніж ${min} символи,
* мати щонайменше:
^ 1 спецсимвол (!, +, ? тощо)`
                } </pre>
                <input
                    style={{ color: pass2.length >= min && hasSymbols(pass2) ? 'inherit' : 'red' }}
                    type="password"
                    value={pass2}
                    id="p2"
                    onChange={el2 => setPass2(el2.target.value)} 
                />
            </label>
        </div>
    )
}

export default PasswordConfirm;