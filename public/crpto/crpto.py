# Fungsi untuk enkripsi menggunakan Caesar Cipher
def enkripsi_caesar(teks, kunci):
    hasil = ""
    for char in teks:
        # Periksa jika karakter adalah huruf besar
        if char.isupper():
            hasil += chr((ord(char) + kunci - 65) % 26 + 65)
        # Periksa jika karakter adalah huruf kecil
        elif char.islower():
            hasil += chr((ord(char) + kunci - 97) % 26 + 97)
        else:
            # Jika bukan huruf, biarkan karakter seperti itu (misalnya spasi atau tanda baca)
            hasil += char
    return hasil

# Fungsi untuk dekripsi menggunakan Caesar Cipher
def dekripsi_caesar(teks, kunci):
    # Periksa apakah kunci yang diberikan adalah 8073
    if kunci != 8073:
        return "Kunci salah"  # Mengembalikan pesan jika kunci tidak sesuai
    
    hasil = ""
    for char in teks:
        # Periksa jika karakter adalah huruf besar
        if char.isupper():
            hasil += chr((ord(char) - kunci - 65) % 26 + 65)
        # Periksa jika karakter adalah huruf kecil
        elif char.islower():
            hasil += chr((ord(char) - kunci - 97) % 26 + 97)
        else:
            # Jika bukan huruf, biarkan karakter seperti itu
            hasil += char
    return hasil

# Fungsi utama untuk meminta input dan menampilkan hasil
def main():
    print("Selamat datang di alat kriptografi Caesar Cipher!")
    pilihan = input("Pilih operasi (enkripsi/dekripsi): ").lower()

    teks = input("Masukkan teks: ")
    kunci = int(input("Masukkan kunci (angka): "))

    if pilihan == "enkripsi":
        teks_enkripsi = enkripsi_caesar(teks, kunci)
        print(f"Teks terenkripsi: {teks_enkripsi}")
    elif pilihan == "dekripsi":
        teks_dekripsi = dekripsi_caesar(teks, kunci)
        print(f"Teks terdekripsi: {teks_dekripsi}")
    else:
        print("Pilihan tidak valid. Silakan pilih 'enkripsi' atau 'dekripsi'.")

if __name__ == "__main__":
    main()
