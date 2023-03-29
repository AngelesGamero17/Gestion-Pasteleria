import { insumoModel } from "../models/insumoModel.js";

export const getInsumo = async (req, res) => {
  try {
    const insumo = await insumoModel.findAll();
    res.status(200).json(insumo);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createInsumo = async (req, res) => {
  try {
    const { ID,nombreInsumo,stkIsumo,fechaVen,fecCompra,tipoInsumo,precioInsumo} = req.body;
    if (insumo) {
      return res.status(400).json({ message: "insumo ya existe" });
    }
    const nuevoinsumo = await insumoModel.create({
      ID,
      nombreInsumo,
      stkIsumo,
      fechaVen,
      fecCompra,
      tipoInsumo,
      precioInsumo
    });
    res.status(201).json({
      message: "Cliente creado Correctamente",
      data: nuevoCliente,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneInsumo = async (req, res) => {
  try {
    const { ID } = req.params;
    const insumo = await insumoModel.findOne({ where: { ID } });
    if (!insumo)
      return res.status(404).json({ message: "insumo no encontrado" });
    res.status(200).json(insumo);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteInsumo = async (req, res) => {
  try {
    const { ID } = req.params;
    const insumo = await insumoModel.findOne({ where: { ID } });
    if (!insumo)
      return res.status(404).json({ message: "insumo no encontrado" });
    await insumoModel.destroy({ where: { ID } });
    res.status(200).json({ message: "insumo eliminado Satisfactoriamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateInsumo = async (req, res) => {
  try {
    const { ID } = req.params;
    const { nombreInsumo,stkIsumo,fechaVen,fecCompra,tipoInsumo,precioInsumo} = req.body;
    const insumo = await insumoModel.findOne({ where: { ID } });
    if (!insumo)
      return res.status(404).json({ message: "insumo no encontrado" });
    await insumoModel.update({ nombreInsumo,stkIsumo,fechaVen,fecCompra,tipoInsumo,precioInsumo }, { where: { ID } });
    res.status(200).json({ message: "insumo actualizado Correctamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

