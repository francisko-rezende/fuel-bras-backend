export const docs = {
  post: {
    operation: { summary: 'Registra novo cálculo no histórico' },
    body: {
      schema: {
        example: {
          licensePlate: 'AAA0A00',
          model: 'Toyota Camry',
          maxFuelCapacity: 50,
          maxLoad: 500,
          averageFuelConsumption: 7.5,
          traveledDistance: 1000,
          formattedAverageFuelConsumptionByTonByKm: '0,15',
        },
      },
    },
    createdResponse: {
      schema: {
        example: {
          licensePlate: 'AAA0A00',
          formattedAverageFuelConsumptionByTonByKm: '0,15',
          model: 'Toyota Camry',
          maxFuelCapacity: 50,
          maxLoad: 500,
          averageFuelConsumption: 7.5,
          traveledDistance: 1000,
          id: 5,
        },
      },
    },
    badRequestResponse: {
      schema: {
        example: {
          error: {
            response: {
              statusCode: 400,
              message: 'Bad Request',
            },
            status: 400,
            options: {},
            message: 'Bad Request',
            name: 'BadRequestException',
          },
        },
      },
    },
  },
  get: {
    okResponse: {
      schema: {
        example: [
          {
            id: 4,
            licensePlate: 'AAA0A00',
            formattedAverageFuelConsumptionByTonByKm: '0,15',
            model: 'Toyota Camry',
            maxFuelCapacity: 50,
            maxLoad: 500,
            averageFuelConsumption: 7.5,
            traveledDistance: 1000,
          },
          {
            id: 3,
            licensePlate: 'AAA0A00',
            formattedAverageFuelConsumptionByTonByKm: '0,15',
            model: 'Toyota Camry',
            maxFuelCapacity: 50,
            maxLoad: 500,
            averageFuelConsumption: 7.5,
            traveledDistance: 1000,
          },
        ],
      },
    },
    badRequestResponse: {
      schema: {
        example: {
          error: {
            response: {
              statusCode: 400,
              message: 'Bad Request',
            },
            status: 400,
            options: {},
            message: 'Bad Request',
            name: 'BadRequestException',
          },
        },
      },
    },
    operation: { summary: 'Busca todos os cálculos registrados' },
  },
  delete: {
    okResponse: {
      schema: {
        example: {
          message: 'Entry deleted successfully.',
        },
      },
    },
    badRequestResponse: {
      schema: {
        example: {
          error: {
            response: {
              statusCode: 400,
              message: 'Bad Request',
            },
            status: 400,
            options: {},
            message: 'Bad Request',
            name: 'BadRequestException',
          },
        },
      },
    },
    operation: { summary: 'Apaga um cálculo específico' },
  },
};
