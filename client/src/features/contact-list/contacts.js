import faker from "faker/locale/en_IND";

export const generateFakeContactData = () => {
  const contactData = [];

  for (let i = 0; i < 25; i++) {
    const data = {
      id: i,
      avatar: faker.image.avatar(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      phoneNumber: faker.phone.phoneNumber()
    };

    contactData.push(data);
  }
  localStorage.setItem('contactData', JSON.stringify(contactData));

  return contactData;
};
