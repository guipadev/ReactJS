// Contendra el estado global
import { create } from "zustand";

/**
 * Creamos un custom hook para acceder a este estado
 * Iniciamos un super estado vacio array
 * Luego un despachador permite adicionar nuevas reservas
 * que recibe el hotel y las fechas
 * reservation copia del estado actual y la nueva reserva (hotel, fecha)
 */
const useStore = create((set) => ({
  //super estado
  reservations: [],
  addReservation: (hotel, dates) =>
    set((state) => ({
      reservations: [...state.reservations, { hotel, dates }],
    })),
}));

export default useStore;
