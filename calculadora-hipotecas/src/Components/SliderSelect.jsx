import SliderComponent from "./Common/SliderComponent";

/**
 * desestructuraremos nuestros accesorios que estamos recibiendo de App.js.
 * También, crearemos una variable llamada bank_limit y le asignaremos un valor de 10000.
 * Esto representa la cantidad máxima de dinero que una persona puede pedir prestada a
 * nuestro banco.
 */
const SliderSelect = ({ data, setData }) => {
  const bank_limit = 10000;
  return (
    <div>
      {/*
      Usaremos SliderComponent para mostrar el control deslizante llamado HomeValue. 
      Aquí pasaremos los accesorios como este al componente SliderComponent. 
      */}
      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            homeValue: value.toFixed(0),
            downPayment: (0.2 * value).toFixed(0),
            loanAmount: (0.8 * value).toFixed(0),
          });
        }}
        defaultValue={data.homeValue}
        min={1000}
        max={bank_limit}
        steps={100}
        unit="$"
        amount={data.homeValue}
        label="Home Value"
        value={data.homeValue}
      />
      {/*
        Crearemos los controles deslizantes para Down Payment y Loan Amount 👇
      */}
      <SliderComponent
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: value.toFixed(0),
            loanAmount: (data.homeValue - value).toFixed(0),
          })
        }
        defaultValue={data.downPayment}
        min={0}
        max={data.homeValue}
        steps={100}
        unit="$"
        amount={data.downPayment}
        label="Down Payment"
        value={data.downPayment}
      />

      <SliderComponent
        onChange={(e, value) =>
          setData({
            ...data,
            loanAmount: value.toFixed(0),
            downPayment: (data.homeValue - value).toFixed(0),
          })
        }
        defaultValue={data.loanAmount}
        min={0}
        max={data.homeValue}
        steps={100}
        unit="$"
        amount={data.loanAmount}
        label="Loan Amount"
        value={data.loanAmount}
      />
      {/*
        Control deslizante para nuestro archivo Interest Rate 👇
      */}
      <SliderComponent
        onChange={(e, value) =>
          setData({
            ...data,
            interestRate: value,
          })
        }
        defaultValue={data.interestRate}
        min={2}
        max={18}
        steps={0.5}
        unit="%"
        amount={data.interestRate}
        label="Interest Rate"
        value={data.interestRate}
      />
    </div>
  );
};

export default SliderSelect;
