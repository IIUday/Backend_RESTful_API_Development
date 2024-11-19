
const Plan = require('../models/planModel');

// Create a new plan
const createPlan = async (req, res) => {
    try {
        const plan = new Plan(req.body);
        const savedPlan = await plan.save();
        res.status(201).json(savedPlan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all plans
const getPlans = async (req, res) => {
    try {
        const plans = await Plan.find();
        res.status(200).json(plans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get plan by ID
const getPlanById = async (req, res) => {
    try {
        const plan = await Plan.findById(req.params.id);
        if (!plan) return res.status(404).json({ message: 'Plan not found' });
        res.status(200).json(plan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a plan
const updatePlan = async (req, res) => {
    try {
        const updatedPlan = await Plan.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPlan) return res.status(404).json({ message: 'Plan not found' });
        res.status(200).json(updatedPlan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a plan
const deletePlan = async (req, res) => {
    try {
        const deletedPlan = await Plan.findByIdAndDelete(req.params.id);
        if (!deletedPlan) return res.status(404).json({ message: 'Plan not found' });
        res.status(200).json(deletedPlan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createPlan, getPlans, getPlanById, updatePlan, deletePlan };
