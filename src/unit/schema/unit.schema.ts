const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UnitSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  phase: { type: Schema.Types.ObjectId, ref: 'Phase', required: true },
  numberOfLines: {
    type: Number,
    required: true,
  },
  lines: [{ type: Schema.Types.ObjectId, ref: 'Line' }], // Array of line references
  surfaceArea: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Unit', UnitSchema);
