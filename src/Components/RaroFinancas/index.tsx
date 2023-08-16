import './styles.css';

interface props {
  children: React.ReactNode;
}

export const RaroFinancas = (props: props) => {
  return <div className="raroFinancas">{props.children}</div>;
};
