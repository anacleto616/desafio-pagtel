const mongoConfig = {
  connectionString: 'mongodb://localhost:27017/mydatabase',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};

export default mongoConfig;