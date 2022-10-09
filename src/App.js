import logo from './logo.svg';
import './App.css';
import Background from './components/Background';
<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap" rel="stylesheet"></link>

function App() {
  return (
    <>
      <div className="bg-Light-Grayish-Violet h-screen w-full overflow-hidden relative
      ">
        <div className="bg-gradient-to-b from-Light-Magenta
        to-Light-Violet h-2/4 w-2/4 rounded-br-full
        absolute left-0 top-0 z-0 lg:w-1/3 xl:rounded-b-full 
        xl:w-[35vw] xl:left-[-10%] xl:h-[90%] 2xl:w-[37vw]
        " 
        />

        <Background />

        <div className="bg-[hsl(283,30%,95%)] w-2/4 h-2/4 absolute right-0 bottom-0
          rounded-tl-full xl:h-[90%] xl:rounded-t-full xl:w-[35%] xl:right-[-10%] xl:bottom-[-2%]
          2xl:w-[37vw]
        " />
      </div>
      <div className="attribution font-Rubik">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://pinedamario.com" target='_blank'>Mario Pineda</a>.
    </div>
    </>
  );
}

export default App;
