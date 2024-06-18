// ReportController.js
import Report from "../models/ReportModel.js";

export const createReport = async (req, res) => {
  try {
    const { description, longitude, latitude, strength, address } = req.body;
    // console.log(
    //   `${description} ${longitude} ${latitude} ${strength} ${address}`
    // );
    // Validate required fields
    if (!description || !longitude || !latitude || !strength || !address) {
      return res
        .status(400)
        .json({ error: "Please provide all required fields" });
    }

    // Create new report
    const report = await Report.create({
      description,
      longitude,
      latitude,
      strength,
      address,
    });

    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getReports = async (req, res) => {
  try {
    const reports = await Report.findAll();
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
