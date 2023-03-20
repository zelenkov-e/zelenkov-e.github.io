import { IonButton, IonIcon } from '@ionic/react';
import { addOutline, closeOutline } from 'ionicons/icons';

import './styles.scss';

interface UploadFileInputProps {
    file: File | null,
    openFileDialog: () => void,
    addImage: (e: React.SyntheticEvent) => void,
    removeFile: () => void
}

const UploadFileInput = (props: UploadFileInputProps) => {
    const { file, openFileDialog, addImage, removeFile } = props
    return (
        <div className='uploadfile'>
            <div className='uploadfile-buttonbar'>
                <input type="file" id="upload-file-input" className='uploadfile-input' onChange={addImage} />
                <IonButton onClick={openFileDialog}>
                    <IonIcon icon={addOutline} />
                    Durchsuchen
                </IonButton>
            </div>
            {file &&
                <div className='uploadfile-content'>
                    <div>{file.name}</div>
                    <div>{`${file.size} Mb`}</div>
                    <IonButton onClick={removeFile}>
                        <IonIcon icon={closeOutline} />
                    </IonButton>
                </div>}
        </div>
    )
}

export default UploadFileInput