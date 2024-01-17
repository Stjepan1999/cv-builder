import { FormsContainer } from './components/FormsContainer';
import { ResumeContainer } from './components/ResumeContainer';
import './style.css';

export function App() {
  return (
    <>
      <div className="main">
        <FormsContainer />
        <ResumeContainer />
      </div>
    </>
  );
}
