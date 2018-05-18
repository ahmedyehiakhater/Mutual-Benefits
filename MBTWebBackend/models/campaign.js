var mongoose = require('mongoose');
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var schema = new Schema({
    campaignName: { type: string, required: true },
    campaignMembers: [{ type: string, required: true }],
    description: { type: string, required: true },
    campaignImages: [{ type: string, required: true }],
    contactEmails: [{ type: string, required: true, unique: true }],
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});
schema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('Campaign', schema);