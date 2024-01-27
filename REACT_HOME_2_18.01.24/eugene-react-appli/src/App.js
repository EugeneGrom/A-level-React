import logo from './logo.svg';
import './App.css';
import Spoiler from './components/Spoiler'
import RangeInput from './components/RangeInput'
import LoginForm from './components/LoginForm'
import PasswordConfirm from './components/PasswordConfirm'
import Carousel from './components/Carousel'
import Pagination from './components/Pagination'

const Content = ({ page }) =>
  <div style={{ fontSize: '5em' }}>
    Сторінка №{page}
  </div>

const Color = ({ page }) =>
  <div style={{ color: `rgb(${page * 16},${page * 16},${page * 16})` }}>
    {page}
  </div>

function App() {
  return (
    <div className="App">
      <Spoiler header={<h1>SPOILER</h1>} open>
        Контент 1
        <p>
          лорем іпсум тралівалі і тп.
        </p>
      </Spoiler>


      <Spoiler>
        <h2>Контент 2</h2>
        <p>
          лорем іпсум тралівалі і тп.
        </p>
      </Spoiler>

      <br />
      <hr style={{ borderColor: 'red' }} />

      <RangeInput min={2} max={10} />
      <br />
      <RangeInput />

      <br />
      <hr style={{ borderColor: 'red' }} />

      <LoginForm />

      <br />
      <hr style={{ borderColor: 'red' }} />

      <PasswordConfirm min={3} />
      <br />
      <hr style={{ borderColor: 'red' }} />

      <Carousel images={["https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-1.jpg",
        "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-2.jpg",
        "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-3.jpg",
        "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-4.jpg",
        "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-5.jpg"]} />
      <br />
      <hr style={{ borderColor: 'red' }} />

      <Pagination max={10} render={Content} />
      <Pagination max={16} render={Color} />
      <br />

    </div >
  );
}

export default App;
