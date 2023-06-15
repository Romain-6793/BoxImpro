import "./PageContent.css";
import CardContainer from "../CardContainer/CardContainer";

type PageProps = {
  subtitle: string;
};

// const Book: React.FunctionComponent<BookProps> = (props) => {
//     const { name, author, price } = props;

const PageContent: React.FunctionComponent<PageProps> = (props) => {
  const { subtitle } = props;

  return (
    <div className='flex-column'>
      <h1 className='title'>Box Impro</h1>;
      <h2 className='subtitle'>{subtitle}</h2>
      <CardContainer></CardContainer>
    </div>
  );
};

export default PageContent;
