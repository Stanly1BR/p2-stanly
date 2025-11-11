import Passenger from "../model/passenger.js";

const getAllPassengers = async (req, res) => {
  try {
    const passengers = await Passenger.findAll();
    res.json(passengers);
  } catch (err) {
    res.status(500).json({ message: "Erro ao buscar passageiros" });
  }
};

const getPassengerById = async (req, res) => {
  try {
    const passenger = await Passenger.findByPk(req.params.id);

    if (!passenger) {
      return res.status(404).json({ message: "Passageiro não encontrado" });
    }

    res.json(passenger);
  } catch (err) {
    res.status(500).json({ message: "Erro ao buscar passageiro" });
  }
};

export default {
  getAllPassengers,
  getPassengerById,
};
