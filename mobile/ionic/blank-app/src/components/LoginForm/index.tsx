import React, { useState } from 'react';
import { IonInput, IonItem, IonButton } from '@ionic/react';

import './styles.scss';

interface LoginFormProps { }

const LoginForm: React.FC<LoginFormProps> = () => {
    const [state, setState] = useState({ name: '', pass: '' })

    const handleChange = (event: any) => {
        const val = (event.target as HTMLTextAreaElement).value
        const name = (event.target as HTMLTextAreaElement).name
        setState({ ...state, [name]: val });
    }

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

        const { name, pass } = state
        const data = { name, pass }
        console.log('data : ', data)
    }


    return (
        <div className='panel-body'>
            <form onSubmit={handleSubmit} className='panel-form'>
                <IonItem fill="outline">
                    <IonInput
                        type='text'
                        name='name'
                        placeholder="Kundenname"
                        value={state.name}
                        onIonInput={handleChange}
                    ></IonInput>
                </IonItem>
                <IonItem fill="outline">
                    <IonInput
                        type='password'
                        name='pass'
                        placeholder="Passwort"
                        value={state.pass}
                        onIonInput={handleChange}
                    ></IonInput>
                </IonItem>
                <IonButton type="submit" expand="block" color="danger">Einloggen</IonButton>
            </form>
        </div>
    );
};

export default LoginForm;