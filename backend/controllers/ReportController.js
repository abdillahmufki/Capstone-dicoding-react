// ReportController.js
import Report from "../models/ReportModel.js";

export const createReport = async (req, res) => {
  try {
    const { description, longitude, latitude, date } = req.body;

    // Validate required fields
    if (!description || !longitude || !latitude || !date) {
      return res
        .status(400)
        .json({ error: "Please provide all required fields" });
    }

    // Authorization check: Ensure user is authenticated
    if (!req.user) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Access token is missing or invalid" });
    }

    // Create new report
    const report = await Report.create({
      description,
      longitude,
      latitude,
      date,
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
