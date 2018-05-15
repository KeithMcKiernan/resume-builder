export const databaseConfig = {
  mongodb: {
    host: '',
    port: '',
    dbname: '',
    domain: '',
    username: 'test',
    password: 'test',
  },
};

export const resolveConnectionUrl = () => {
  const { host, dbname, username, password, domain, port } = databaseConfig.mongodb;
  return `${host}://${username}:${password}@${domain}:${port}/${dbname}`;
};
