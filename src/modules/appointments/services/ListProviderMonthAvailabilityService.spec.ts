import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderMonthAvailability: ListProviderMonthAvailabilityService;

describe('ListProviderMonthAvailability', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();

    listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the month availability from providers', async () => {
    const now = new Date();

    await fakeAppointmentsRepository.create({
      provider_id: 'provider',
      user_id: '123123',
      date: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'provider',
      user_id: '123123',
      date: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'provider',
      user_id: '123123',
      date: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        10,
        0,
        0,
      ),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'provider',
      user_id: '123123',
      date: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        11,
        0,
        0,
      ),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'provider',
      user_id: '123123',
      date: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        12,
        0,
        0,
      ),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'provider',
      user_id: '123123',
      date: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        13,
        0,
        0,
      ),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'provider',
      user_id: '123123',
      date: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        14,
        0,
        0,
      ),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'provider',
      user_id: '123123',
      date: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        15,
        0,
        0,
      ),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'provider',
      user_id: '123123',
      date: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        16,
        0,
        0,
      ),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'provider',
      user_id: '123123',
      date: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        17,
        0,
        0,
      ),
    });

    const availability = await listProviderMonthAvailability.execute({
      provider_id: 'provider',
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { day: now.getDate() - 1, available: false },
        { day: now.getDate(), available: false },
        { day: now.getDate() + 1, available: true },
        { day: now.getDate() + 2, available: true },
      ]),
    );
  });
});
