import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

/**
 * Usaremos el componente Stack de MUI para apilar los componentes verticalmente.
 * my es la abreviatura de marginY[margin-top & margin-bottom].
 * Usaremos el Typography componente de MUI para mostrar la etiqueta, la unidad
 * y otros datos.
 * Usaremos el Slidercomponente de MUI para mostrar el control deslizante.
 */

const SliderComponent = ({
  defaultValue,
  min,
  max,
  label,
  unit,
  onChange,
  amount,
  value,
  steps,
}) => {
  {
    /* Mostrar los valores mínimo y máximo del control deslizante. Stack componente de MUI para apilar los componentes horizontalmente. 
      direction="row" es la abreviatura de flex-direction: row. justifyContent="space-between" es la abreviatura de justify-content: space-between.
  */
  }

  return (
    <Stack gap={1}>
      <Typography variant="subtitle2">{label}</Typography>
      <Typography variant="h5">
        {unit} {amount}
      </Typography>
      {/* Mostrar el control deslizante. Pasaremos los accesorios al componente deslizante de esta manera: 👇 */}
      <Slider
        min={min}
        max={max}
        defaultValue={defaultValue}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={onChange}
        value={value}
        marks
        step={steps}
      />
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="caption" color="text.secondary">
          {unit} {min}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {unit} {max}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SliderComponent;
