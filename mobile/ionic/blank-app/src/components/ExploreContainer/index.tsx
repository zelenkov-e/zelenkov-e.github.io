import LoginForm from '../LoginForm'
import './styles.scss';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <LoginForm />
    </div>
  );
};

export default ExploreContainer;
