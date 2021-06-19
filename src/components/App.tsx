import ripple from "&src/ripple.svg";

interface Content {
  h1: string;
  text: string;
  reference: string;
  refDesc: string;
}

const componentContent: Content = {
  h1: "With Typescript",
  text: "This works",
  reference:
    "https://medium.com/@dahvinchee/how-to-set-up-a-react-typescript-project-from-scratch-with-babel-and-webpack-6b069881229d",
  refDesc:
    "There are lots of articles with good explanations and much longer tsconfig.json (like this one)",
};

const App: React.FC = () => {
  return (
    <div className="app" data-test="appComponent">
      <img src={ripple} alt="Rippling" />
      <h1>{componentContent.h1}</h1>
      <p>{componentContent.text}</p>
      <div className="content">
        <a href={componentContent.reference}>
          {componentContent.refDesc}
        </a>
        <div>
          Or, just run `tsc --init` after `npm install
          typescript`.
          <p>
            You will have to look up any configurations though.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
