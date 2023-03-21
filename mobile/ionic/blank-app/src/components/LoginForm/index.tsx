import React, { useState } from 'react';
import { IonInput, IonItem, IonButton } from '@ionic/react';
import { Camera, CameraResultType } from '@capacitor/camera';

import UploadFileInput from '../UploadFileInput';


import './styles.scss';

interface LoginFormProps { }

const LoginForm: React.FC<LoginFormProps> = () => {
    const [state, setState] = useState({ name: '', pass: '' })
    const [file, setFile] = useState<File | null>(null);
    const [img, setImg] = useState<string | undefined>('')

    const captureImage = async () => {
        const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: true,
            resultType: CameraResultType.Uri
        });
        const imageUrl = image.webPath;
        setImg(imageUrl)
    }

    const addFile = (e: React.SyntheticEvent) => {
        const files = (e.target as HTMLInputElement).files
        files && setFile(files[0])
    }

    const openFileDialog = () => {
        (document as any).getElementById('upload-file-input').click()
    };

    const handleChange = (event: any) => {
        const val = (event.target as HTMLInputElement).value
        const name = (event.target as HTMLInputElement).name
        setState({ ...state, [name]: val });
    }

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

        const { name, pass } = state
        const data = { name, pass, file, img }
        console.log('data : ', data)
    }

    return (
        <div className='panel-body'>
            <form onSubmit={handleSubmit}>
                <div className='panel-form'>
                    <IonItem fill="outline">
                        <IonInput
                            type='text'
                            name='name'
                            placeholder="name"
                            value={state.name}
                            onIonInput={handleChange}
                        ></IonInput>
                    </IonItem>
                    <IonItem fill="outline">
                        <IonInput
                            type='password'
                            name='pass'
                            placeholder="password"
                            value={state.pass}
                            onIonInput={handleChange}
                        ></IonInput>
                    </IonItem>
                    <UploadFileInput
                        action='add file'
                        file={file}
                        openFileDialog={openFileDialog}
                        removeFile={() => setFile(null)}
                        addImage={addFile}
                    />
                    <UploadFileInput
                        action='add photo'
                        file={img}
                        openFileDialog={captureImage}
                        removeFile={() => setImg('')}
                        addImage={addFile}
                    />
                </div>
                <IonButton type="submit" title="login" expand="block" color="danger">
                    login
                </IonButton>
            </form>
        </div>
    );
};

export default LoginForm;