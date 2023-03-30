export default class UserValidation {
  public static valideEmail(email: string): boolean {
    const emailRegex = /\S+@\S+\.\S/;
    return emailRegex.test(email);
  }

  public static validePassword(password: string): boolean {
    return password.length >= 6;
  }

  public static valideUser(
    email: string,
    password: string,
  ): boolean {
    return (
      this.valideEmail(email) && this.validePassword(password)
    );
  }
}
