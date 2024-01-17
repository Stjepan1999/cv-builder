import { FormContainer } from './components/FormContainer';
import { ResumeContainer } from './components/ResumeContainer';
import './style.css';

export function App() {
  return (
    <>
      <div className="main">
        <FormContainer />
        <ResumeContainer />
      </div>
    </>
  );
}
