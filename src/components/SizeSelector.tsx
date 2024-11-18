import { FC } from "react";
const possibleSizes = ["Dei V", "Myke Towers", "Rauw Alejandro", "Bad Bunny", "Yan Block", "Yurii", "Mbappe"];

interface Props {
  selectedCantante: string;
  onCantanteChange: ( size: string ) => void;
}

export const SizeSelector: FC<Props> = ({ selectedCantante, onCantanteChange }) => {
  return (
    <div style={{ display: "flex" }}>
      {possibleSizes.map((size) => (
        <button 
            key={size}
            className={ selectedCantante === size ? 'active': '' }
            onClick={ () => onCantanteChange( size ) }
        >
            {size}
        </button>
      ))}
    </div>
  );
};

export default SizeSelector;
