import * as React from 'react';
import ImageUploader from 'react-images-upload';
import '../../assets/stylesheets/imageUploader.css';

interface State {
  logoFile: any;
  logoUrl: any;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

class ImageUploadComponent extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      logoFile: null,
      logoUrl: null,
    };
  }

  onDrop = (pictureFiles, pictureDataURLs) => {
    this.setState({
      logoFile: pictureFiles[0],
      logoUrl: pictureDataURLs[0],
    });
  };

  render(): React.ReactNode {
    return (
      <React.Fragment>
        <ImageUploader
          withIcon={true}
          withPreview={true}
          singleImage={true}
          buttonText="Choose logo"
          onChange={this.onDrop}
          imgExtension={['.jpg', '.gif', '.png']}
          label={'Max file size: 3mb, accepted: jpg|gif|png'}
          maxFileSize={3145728} //3mb
          buttonClassName={'bg-primary'}
        />
      </React.Fragment>
    );
  }
}

export default ImageUploadComponent;
