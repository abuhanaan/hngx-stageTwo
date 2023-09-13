const Person = require("../model/person");
const genUniqueId = require("../utils/generateUniqueId");
const validateInput = require("../utils/validations/validateStringInput");

const createPerson = async (req, res) => {
  try {
    const { name, gender, state, age } = req.body;
    validateInput(res, name);
    if (gender) {
      validateInput(res, gender);
    }
    if (state) {
      validateInput(res, state);
    }

    const salt = name + gender;
    const uniqueId = genUniqueId(salt);
    const existingPerson = await Person.findOne({ where: { name: name } });
    if (existingPerson) {
      const response = {
        status: false,
        message: `User with name ${name} alredy exist, please choose a different name`,
      };
      return res.status(409).send(response);
    } else {
      const newPerson = await Person.create({
        name: name,
        gender: gender ? gender : null,
        state: state ? state : null,
        age: age ? parseInt(age) : null,
        uniqueId: uniqueId,
      });
      const response = {
        id: newPerson.uniqueId,
        name: newPerson.name,
        gender: newPerson.gender,
        state: newPerson.state,
        age: newPerson.age,
      };

      return res.status(201).send(response);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

const getPerson = async (req, res) => {
  try {
    const { id } = req.params;
    const person = await Person.findOne({ where: { uniqueId: id } });

    if (person === null) {
      const response = {
        status: false,
        message: `User with id ${id} does not exist`,
      };
      return res.status(404).send(response);
    } else {
      const response = {
        id: person.uniqueId,
        name: person.name,
        gender: person.gender,
        state: person.state,
        age: person.age,
      };
      return res.status(200).send(response);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

const updatePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const person = await Person.findOne({ where: { uniqueId: id } });

    if (person === null) {
      const response = {
        status: false,
        message: `User with id ${id} does not exist`,
      };
      return res.status(404).send(response);
    } else {
      if (req.body.name) {
        validateInput(res, req.body.name);
        const existingName = await Person.findOne;
      }
      if (req.body.gender) {
        validateInput(req.body.gender);
      }
      if (req.body.state) {
        validateInput(req.body.state);
      }
      const existingPerson = await Person.findOne({
        where: { name: req.body.name },
      });
      if (!existingPerson || person.name === existingPerson.name) {
        await person.update(req.body);
        const response = {
          id: person.uniqueId,
          name: person.name,
          gender: person.gender,
          state: person.state,
          age: person.age,
        };
        return res.status(201).send(response);
      } else {
        const response = {
          status: false,
          message: `Name ${req.body.name} already exist, please choose a different name`,
        };
        return res.status(409).send(response);
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

const deletePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const person = await Person.findOne({ where: { uniqueId: id } });

    if (person === null) {
      const response = {
        status: false,
        message: `User with id ${id} does not exist`,
      };
      return res.status(404).send(response);
    } else {
      await person.destroy();
      const response = {
        message: "Record deleted successfully!",
      };

      return res.status(200).send(response);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

const personServices = {
  createPerson: createPerson,
  getPerson: getPerson,
  updatePerson: updatePerson,
  deletePerson: deletePerson,
};

module.exports = personServices;
