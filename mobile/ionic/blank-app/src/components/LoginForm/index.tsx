import React, { useState } from 'react';
import { IonInput, IonItem, IonButton } from '@ionic/react';
import UploadFileInput from '../UploadFileInput';

import './styles.scss';

interface LoginFormProps { }

const LoginForm: React.FC<LoginFormProps> = () => {
    const [state, setState] = useState({ name: '', pass: '' })
    const [file, setFile] = useState<File | null>(null);

    const addFile = (e: React.SyntheticEvent) => {
        const files = (e.target as HTMLInputElement).files
        files && setFile(files[0])
    }

    const openFileDialog = () => {
        (document as any).getElementById("upload-file-input").click()
    };

    const handleChange = (event: any) => {
        const val = (event.target as HTMLInputElement).value
        const name = (event.target as HTMLInputElement).name
        setState({ ...state, [name]: val });
    }

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

        const { name, pass } = state
        const data = { name, pass, file }
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
                <UploadFileInput
                    file={file}
                    openFileDialog={openFileDialog}
                    removeFile={() => setFile(null)}
                    addImage={addFile}
                />
                <IonButton type="submit" title="login" expand="block" color="danger">
                    Einloggen
                </IonButton>
            </form >
        </div >
    );
};

export default LoginForm;