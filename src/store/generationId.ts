function generateSecureRandomString(length: number): string {
    const array = new Uint8Array(length);
    window.crypto.getRandomValues(array);
    return Array.from(array, byte => String.fromCharCode(byte % 26 + 97)).join('');
}

export {
    generateSecureRandomString
}