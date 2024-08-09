import IconCheck from "@components/icon/IconCheck";
import PasswordValidationBoxComponent from "@components/PasswordValidationBoxComponent";
import {useEffect, useState} from "react";

export default function PasswordValidationBox({password, setValidation, validationArray}){

    useEffect(()=>{
        if(password){
            if(password.match(/[a-z]/)){
                setValidation(prevState => ({...prevState, "olc": true}))
            } else {
                setValidation(prevState => ({...prevState, "olc": false}))
            }
            if(password.match(/[!@#$%^&*()\-_+=\[\]{}\\|;:'",.\/<>?]/)){
                setValidation(prevState => ({...prevState, "osc": true}))
            } else {
                setValidation(prevState => ({...prevState, "osc": false}))
            }
            if(password.match(/[A-Z]/)){
                setValidation(prevState => ({...prevState, "ouc": true}))
            } else {
                setValidation(prevState => ({...prevState, "ouc": false}))
            }
            if(password.length >= 8){
                setValidation(prevState => ({...prevState, "ecm": true}))
            } else {
                setValidation(prevState => ({...prevState, "ecm": false}))
            }
            if(password.match(/[0-9]/)){
                setValidation(prevState => ({...prevState, "onm": true}))
            } else {
                setValidation(prevState => ({...prevState, "onm": false}))
            }
        }else{
            setValidation({
                "olc": false,
                "osc": false,
                "ouc": false,
                "ecm": false,
                "onm": false,
            })
        }
        // validationArray.olc = password.match("q")
        // console.log("running Effect on password " + password)
    }, [password])



    return (
        <div className={"grid grid-cols-2 gap-1.5"}>
            <PasswordValidationBoxComponent text={"one lowercase character"} checked={validationArray.olc} />
            <PasswordValidationBoxComponent text={"one special character"} checked={validationArray.osc} />
            <PasswordValidationBoxComponent text={"one uppercase character"} checked={validationArray.ouc} />
            <PasswordValidationBoxComponent text={"8 character minimum"} checked={validationArray.ecm} />
            <PasswordValidationBoxComponent text={"one number"} checked={validationArray.onm} />
        </div>
    )
}