import { IonButton, IonIcon } from '@ionic/react';
import { addOutline, closeOutline } from 'ionicons/icons';

import './styles.scss';

interface UploadFileInputProps {
    action: string,
    file: any,
    openFileDialog: () => void,
    addImage: (e: React.SyntheticEvent) => void,
    removeFile: () => void
}

const UploadFileInput = (props: UploadFileInputProps) => {
    const { action, file, openFileDialog, addImage, removeFile } = props
    return (
        <div className='uploadfile'>
            <div className='uploadfile-buttonbar'>
                {action === 'add file' &&
                    <input
                        type="file"
                        id='upload-file-input'
                        className='uploadfile-input'
                        onChange={addImage}
                    />}
                <IonButton onClick={openFileDialog}>
                    <IonIcon icon={addOutline} />
                    {action}
                </IonButton>
            </div>
            {file &&
                <div className='uploadfile-content'>
                    <div className='uploadfile-content__file'>
                        {action === 'add file' ? <div>{file.name}</div> : <img src={file} alt='img' />}
                    </div>
                    <IonButton onClick={removeFile}>
                        <IonIcon icon={closeOutline} />
                    </IonButton>
                </div>}
        </div>
    )
}

export default UploadFileInput