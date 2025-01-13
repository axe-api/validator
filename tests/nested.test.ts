import { beforeAll, describe, test, expect } from "vitest";
import { validate, setLocales, en, ILocale } from "../index";

describe("validate()", () => {
  beforeAll(async () => {
    setLocales(en as ILocale);
  });

  test("should validate nested objects", async () => {
    const result = await validate(
      {
        id: 1,
        token: "123",
        user: {
          id: 1,
          email: "email",
        },
      },
      {
        id: "required|numeric",
        token: "required|min:20",
        "user.email": "required|email",
      }
    );
    expect(result.isValid).toBe(false);
    expect(result.fields.id).toBe(true);
    expect(result.fields.token).toBe(false);
    expect(result.fields["user.email"]).toBe(false);

    expect(result.errors["user.email"][0].message).toBe(
      "The field must be an email."
    );
  });

  test("should validate arrays", async () => {
    const result = await validate(
      {
        users: [
          {
            email: "correct@mail.com",
          },
          { email: "email" },
        ],
      },
      {
        "users.*.email": "required|email",
      }
    );
    expect(result.isValid).toBe(false);
    expect(result.fields["users.*.email"]).toBe(false);
    expect(result.errors["users.1.email"][0].message).toBe(
      "The field must be an email."
    );
  });

  test("should validate nested arrays", async () => {
    const result = await validate(
      {
        users: [
          {
            addresses: [
              {
                city: "New York",
              },
              {
                street: "Wall Street",
              },
            ],
          },
          {
            addresses: [
              {
                city: "New York",
              },
              {
                city: "Los Angeles",
              },
            ],
          },
        ],
      },
      {
        "users.*.addresses.*.city": "required",
      }
    );
    expect(result.isValid).toBe(false);
    expect(result.fields["users.*.addresses.*.city"]).toBe(false);
    expect(result.errors["users.0.addresses.1.city"][0].message).toBe(
      "The field is required."
    );
  });

  test("should validate everything", async () => {
    const result = await validate(
      {
        secret: "some secret",
        users: [
          {
            addresses: [
              {
                city: "New York",
              },
              {
                city: "Istanbul",
              },
            ],
          },
          {
            addresses: [
              {
                city: "New York",
              },
              {
                street: "Wall Street",
              },
            ],
          },
        ],
        permissons: {
          read: true,
          write: true,
        },
      },
      {
        secret: "required|min:100",
        "users.*.addresses.*.city": "required",
        "permissons.read": "required|boolean",
        "permissons.delete": "required|boolean",
      }
    );
    expect(result.isValid).toBe(false);
    expect(result.fields.secret).toBe(false);
    expect(result.fields["users.*.addresses.*.city"]).toBe(false);
    expect(result.fields["permissons.read"]).toBe(true);
    expect(result.fields["permissons.delete"]).toBe(false);
  });
});
