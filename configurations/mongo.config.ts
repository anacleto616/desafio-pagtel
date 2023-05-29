const mongoConfig = {
  connectionString: 'mongodb://localhost:27017/pagtel-mongo-logs',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};

export default mongoConfig;
