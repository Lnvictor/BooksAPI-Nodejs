const { User } = require('../../models')
const authController = require('../../controllers/authController');
const jwt = require('jsonwebtoken')

describe('Testing jwt token validation', () => {
    it('Wrong token validation', async () => {
        const token = {
            headers: {
                authorization: "MyWrongToken.tooWorng.ManyManyerrors"
            }
        }
        expect(authController.verifyToken(token)).toBeFalsy();
    })

    it('Testing jwt webtoken validation', async () => {
        const token = authController.createToken("somefunnyid");
        const decoded =await promisify(jwt.verify)(token, process.env.JWT_SECRET);
        expect(decoded.id).toBe("somefunnyid");
    });
});