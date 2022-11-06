module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      name: String,
      description: String,
      isExpired: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Medicine = mongoose.model("medicine", schema);
  return Medicine;
};
