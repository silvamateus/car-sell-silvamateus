import { CPFValidation } from "@/utils/validation/cpf";

describe("CPF validation", () => {
  it("should return false", () => {
    const cpfSameNumber = CPFValidation("00000000000");
    expect(cpfSameNumber).toBeFalsy();
    const invalidCPF = CPFValidation("30639864525");
    expect(invalidCPF).toBeFalsy();
  });
  it("should validate", () => {
    const validCPF = CPFValidation("44843104060");
    expect(validCPF).toBeTruthy();
  });
});
