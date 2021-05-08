 /*
1. Jelaskan apa yang dimaksud constructor, method, class, object, variabel, parameter, function, procedure?
    jawaban:
    Constructor 
    merupakan suatu method yang akan memberikan nilai awal pada saat suatu objek dibuat.

    Method
    merupakan suatu operasi berupa fungsi-fungsi yang dapat dikerjakan oleh suatu object. Method didefinisikan pada class akan tetapi dipanggil melalui object.

    Class
    merupakan suatu blueprint atau cetakan untuk menciptakan suatu instant dari object. Class juga merupakan grup suatu object dengan kemiripan attributes/properties, behaviour dan relasi ke object lain.

    Object 
    adalah instance dari class. Jika class secara umum merepresentasikan (template) sebuah object, sebuah instance adalah representasi nyata dari class itu sendiri.

    Variabel
    adalah tempat untuk menyimpan suatu data atau nilai pada memori dengan tipe tertentu.

    Parameter
    adalah tempat penyimpanan (variabel) di dalam function, yang digunakan untuk melakukan pemeberian data dari pemanggil ke dalam function.

    function
    adalah sebutan untuk fungsi yang mengembalikan nilai.

    procedure
    adalah sebutan untuk fungsi yang tidak mengembalikan nilai.


2. Jelaskan apa itu OOP dan apa kelebihan saat kita menggunakannya? Bahasa apa saja yang bisa menggunakan OOP?
    jawaban:
    OOP adalah singkatan dari Object Oriented Programming. OOP merupakan metode pemrograman yang lebih berorientasi pada objek. maksudnya pemrograman yang lebih terpusat pada objek. sehingga akan lebih sangat memudahkan kita di dalam membuat aplikasi.

    kelebihannya
    -Syntax lebih terstruktur.
    -Terekomendasi.
    -Sangat efektif jika di gunakan untuk membuat aplikasi yang berskala besar.
    -Lebih mudah dan menghemat waktu, karena fungsi/function bisa di panggil berulang-ulang kali. tergantung keperluan.
    -Lebih menghemat waktu.
    -Aplikasi lebih mudah di kembangkan.

    Bahasa yg bisa menggunakan OOP
    pemrograman JAVA dan C++. tetapi di PHP sudah sangat di dukung pada versi PHP5.


3. Jelaskan perbedaan echo dan print, serta print_r dan var dump?
    jawaban:
    Jika ingin sekedar mencetak output ke browser maka gunakan echo, jika ingin mengetahui isi variabel untuk proses debugging / development maka gunakan print_r atau var_dump jika ingin menampilkan tipe data dan panjang data.


4. Jelaskan tentang if else, while, while do, switch case, for, foreach baik dari fungsi maupun penggunaan?
    jawaban:
    if else
    Seperti pada terjemahan harfiah nya, if berarti jika, maka, jika kondisi yang dievaluasi bernilai TRUE atau terpenuhi, maka blok statement if akan dijalankan, sebaliknya bila kondisinya tidak terpenuhi atau bernilai false maka statement ELSE yang akan dijalankan.

    while
    Perulangan while adalah perulangan yang termasuk dalam uncounted loop. Karena biasanya digunakan untuk mengulang sesuatu yang belum jelas jumlah pengulangannya.

    while do
    Perulangan Do/While sama seperti perulangan while. Ia juga tergolong dalam uncounted loop. Perbedaan Do/While dengan while terletak pada cara iya memulai pengulangan. Perulangan Do/While akan selalu melakukan pengulangan sebanyak 1 kali, kemudian melakukan pengecekan kondisi. Sedangkan perulangan while akan mengecek kondisi terlebih dahulu, baru melakukan pengulangan.

    Switch Case 
     digunakan untuk percabangan yang kondisinya banyak, bentuk dari Switch-case merupakan pernyataan yang dirancang khusus untuk menangani pengambilan keputusan yang melibatkan sejumlah atau banyak alternatif penyelesaian. Jika pada percabangan terdapat pilihan banyak, maka perintah switch-case lebih dianjurkan daripada menggunakan if - else. Tidak dianjurkan pada pilihan yang melibatkan jangkauan (range) tetapi dianjurkan pada pilihan berupa konstanta dan banyak misalnya untuk memilih menu.

     for
     Perulangan for adalah perulangan yang mengerjakan suatu pernyataan scara berulang-ulang. Jenis perulangan ini mempunyai 3 parameter penting yang pertama ada inisialisasi nilai awal. Kondisi untuk set perulangan akan berhenti ketika kondisi telah terpenuhi. Yang terakhir ada modifier untuk menambahkan nilai inisialisasi awal tersebut.

     foreach
     Perulangan foreach merupakan perulangan khusus untuk pembacaan nilai array.


5. Apa yang terjadi jika dalam if-then-else Anda tidak menyertakan else?
    jawaban:
    jika kondisi tidak terpenuhi maka ekspresi di dalam struktur if tidak akan dijalankan dan blok if akan dilompati serta program akan melakukan tindakan berikutnya.


6. Jelaskan apa yang dimaksud array?
    jawaban:
    Array adalah sebuah struktur data yang terdiri atas banyak variabel dengan tipe data sama, dimana masing-masing elemen variabel mempunyai nilai indeks.


7. Jelaskan dan berikan contoh yang dimaksud dengan inheritance, polymorfis, overriding, overloading, encapsulation, abstraction
    jawaban:
    a. Inheritance 
    adalah konsep OOP di mana kita dapat membentuk class baru yang “mewarisi” atau memiliki bagian-bagian dari class yang sudah ada sebelumnya. Konsep ini menggunakan sistem hirarki atau bertingkat. Seperti sebuah Drop-Down Menu yang ada di kebanyakan website, di mana semakin spesifik submenunya, semakin spesifik pula kontennya. Demikian juga dengan Inheritance OOP di mana semakin spesifik subclassnya, semakin sedikit pula komponen yang dapat diwarisi class tersebut.
    contoh:
    public class A
    {
        public A() { }
    }

    public class B : A
    {
        public B() { }
    }

    b. Polymorphism atau polymorfis
    adalah konsep di mana suatu objek yang berbeda-beda dapat diakses melalui interface yang sama. Sebuah objek yang polymorphic dapat beradaptasi dengan metode apapun yang diimplementasikan pada objek tersebut, dan setiap class memiliki interpretasinya tersendiri terhadap interfacenya.
    contoh:
    public class BaseClass
    {
        public void DoWork() { }
        public int WorkField;
        public int WorkProperty
        {
            get { return 0; }
        }
    }

    public class DerivedClass : BaseClass
    {
        public new void DoWork() { }
        public new int WorkField;
        public new int WorkProperty
        {
            get { return 0; }
        }
    }

    c. Overriding 
    Merupakan Suatu Keadaan Dimana kelas anak dapat mengubah atau bisa kita bilang memodifikasi atau memperluas data dan method pada kelas induk.
    contoh:
    abstract class ShapesClass
    {
        abstract public int Area();
    }

    class Square : ShapesClass
    {
        int x, y;
        // Because ShapesClass.Area is abstract, failing to override
        // the Area method would result in a compilation error.
        public override int Area()
        {
            return x * y;
        }
    }

    d. Overloading 
    Merupakan Suatu Function yang memiliki parameter , dan function tersebut dapat memiliki nama function yang sama dengan yang lainnya dengan syarat jumlah parameter mesti berbeda atau bisa kita bilang Situasi di mana beberapa rutin dalam sebuah program dapat mempunyai nama sama tetapi berbeda jenis parameter atau jenis return value.
    contoh:
    public static double TaxCalc(double pamt1, double prate1, double pamt2,
    double prate2)
    {
    double taxamt;

    Console.WriteLine(“Using method with 4 arguments”);
    taxamt = (pamt1 * prate1) + (pamt2 * prate2);

    return taxamt;

    } // *** TaxCalc ***

    // This method only takes two arguments: an amount and a rate
    public static double TaxCalc(double pamt1, double prate1)
    {
    double taxamt;

    Console.WriteLine(“Using method with 2 arguments”);
    taxamt = pamt1 * prate1;

    return taxamt;

    } // *** TaxCalc ***

    // This method only takes one argument: an amount
    public static double TaxCalc(double pamt)
    {
    double taxrate = 0.15;
    double taxamt = 0;

    Console.WriteLine(“Using method with 1 argument”);
    taxamt = pamt * taxrate;

    return taxamt;

    } // *** TaxCalc ***

    // This method only takes one argument as well but it differs
    // from the above in the argument type.
    public static double TaxCalc(string whichtable)
    {
    double taxrate = 0;
    Console.WriteLine(“Calling the method with 1 string argument”);

    if (whichtable == “TaxTable1″)
    taxrate = 0.15;

    return taxrate;

    }

    e. Encapsulation
    adalah konsep tentang pengikatan data atau metode yang berbeda yang disatukan atau “dikapsulkan” menjadi satu unit data. Encapsulation dapat mempermudah dalam pembacaan code karena informasi yang disajikan tidak perlu dibaca secara rinci dan sudah merupakan satu kesatuan. Encapsulation juga sering digunakan karena terdapat fitur information-hiding mechanism. Mekanisme ini menghilangkan akses publik ke atribut-atribut yang terdapat di dalam “kapsul” tersebut. Metode ini dapat memudahkan anda dalam mendefinisikan atribut apa saja yang dapat dibaca dan diperbarui.
    contoh:
    public class nilai {
    private int nilaiku;

    public String Nama;
    public String NIM;


    public void setNilai (int nilai){
                nilaiku=nilai;
    }
    public int getNilai(){
                return nilaiku;
    }

    }

    public class nilaiTest {
    public static void main(String[] args) {
    // TODO Auto-generated method stub
    nilai Biodata = new nilai();
    Biodata.Nama = “Adelya”;
    Biodata.NIM = “5302414023”;
    Biodata.setNilai(90);
    System.out.println(“Nama = “+ Biodata.Nama);
    System.out.println(“NIM = “+ Biodata.NIM);
    System.out.println(“Nilai = “+ Biodata.getNilai());
    }

    }

    f. abstraction 
    adalah Proses untuk menyembunyikan detail implementasi dan hanya sisi fungsionalitas (gambaran umum) saja yang ditampilkan.
    contoh:
    abstract class Induk{

        public String namaAyah = "Imam Farisi";

        abstract void makan();

        public void minum(){
            System.out.println("Minum Air Teh dan Kopi");
        }
    }

    class AnakUmur1Tahun extends Induk{

        public void namaAyahKu(){
            System.out.println("Nama Ayahku adalah "+namaAyah);
        }

        @Override
        public void makan(){
            System.out.println("Anak Umur 1 Tahun Makan Asi");
        }

        @Override
        public void minum(){
            System.out.println("Anak Umur 1 Tahun Minum Asi");
        }
    }

    class Main{
        public static void main(String args[]){
            //object induk tidak bisa di buat disini

            //buat object anak umur 1 tahun baru
            AnakUmur1Tahun a1 = new AnakUmur1Tahun();

            //panggil method anak umur 1 tahun
            a1.makan();
            a1.minum();
            a1.namaAyahKu();
            System.out.println();
        }
    }


8. Jelaskan perbedaan HTTP dan HTTPS
    jawaban:
    Hypertext Transfer Protocol (HTTP) adalah protokol yang mengatur komunikasi antara client dan server. Yang menjadi client adalah web browser atau device lain yang dapat mengakses, menerima dan menampilkan konten web. Sedangkan Hypertext Transfer Protocol Secure (HTTPS) adalah versi secure dari HTTP yang dikembangkan oleh Netscape Communications Corp.
    perbedaan:
    -Untuk melakukan komunikasi, secara default HTTP menggunakan port 80 sedangkan HTTPS menggunakan port 443.
    -Secara default, protokol yang digunakan untuk komunikasi client-server adalah HTTP. Sementara untuk dapat menggunakan protokol HTTPS, kita diharuskan memiliki sertifikat SSL. Secure Socket Layers (SSL) adalah teknologi keamanan yang memungkinkan untuk melakukan enkripsi terhadap data yang akan ditransmisikan antara client dan server. SSL memungkinkan kita untuk dapat mengirim informasi penting, seperti nomor kartu kredit dan login credential, dengan aman.
    -HTTP tidak menjamin keamanan data yang ditransmisikan antara client dengan server. Sementara HTTPS menjamin keamanan data yang dikirimkan.


9. Jelaskan dan berikan contoh tentang API
    jawaban:
    Application Programming Interface atau API adalah sebuah antarmuka yang digunakan untuk menghubungkan antara satu aplikasi dengan aplikasi yang lain. Peran dari API adalah untuk sebagai perantara yang menghubungkan aplikasi berbeda, baik dari platform yang sama maupun lintas platform.
    contoh:
    Google Maps API


10. Jelaskan yang dimaksud MVC dan HMVC?
    jawaban:
    MVC adalah kependekan dari Model View Controller, dimana fungsingnya sebagai pemisah antar data, tampilan, dan pengontrol.
    Model : Menangani koneksi dan pengolahan database.
    View : Mengatur tampilan pada halaman user.
    Controller : Mengelola instruksi untuk menghubungkan model dan view.

    HMVC adalah perkembangan dari metode sebelumnya, MVC. Pada HMVC (Hierarchical Model View Controller), programmer akan dimudahkan dalam mengatur bagian bagian data. Pada MVC, ketika admin dan team memiliki projek SIA misalnya, tentu akan membuat banyak view, banyak controller, dan banyak model. Karena dikerjakan banyak orang, tentu akan bingung sendiri ketika menyatukan program. Nah, dari permasalahan tersebut, dapat diambil solusi, agar satu fungsi, bisa dijadikan satu folder yang berisi dari model view controller.


11. Mengapa setiap bahasa pemrograman itu terdapat framework dan menurut Anda apa kegunaan framework?
    jawaban:
    Framework diciptakan untuk membantu developer mengembangkan aplikasi atau website lebih cepat serta tersusun dan terstruktur. Dengan menggunakan framework akan lebih mudah untuk membuat aplikasi atau website, karena hanya perlu menyusun komponen-komponen pemrograman yang sudah jadi.


12. Jelaskan perbedaan method ”Post” dan “Get”? Dan bagaimana mendapatkan informasi dari form yang menggunakan metode GET dan POST?
    jawaban: 
    Method POST akan mengirimkan data atau nilai langsung ke action untuk ditampung, tanpa menampilkan pada URL. Sedangkan method GET akan menampilkan data/nilai pada URL, kemudian akan ditampung oleh action.
    dan untuk mendapatkan nilainya Method POST menggunakan variable $_POST (Untuk PHP (Native)) untuk menampung data/nilai. Sedangkan method GET menggunakan variable $_GET (Untuk PHP (Native)) untuk menampung data/nilai.


13. Jelaskan konsep mengenai web service dan fungsi apa yang digunakan untuk memanggil web service client?
    jawaban:
    Web service adalah aplikasi yang tersedia melalui jaringan internet yang terdiri dari kumpulan protokol dan standard terbuka yang dirancang memiliki sistem pertukaran pesan/informasi berbasis XML untuk bertukar data antar perangkat ke perangkat dalam format klien-server. Secara independen, sekumpulan fungsi atau metode yang tersimpan pada server dapat dipanggil oleh klien dari jarak jauh dengan menggunakan sistem operasi, aplikasi, dan bahasa pemograman apapun.
    Pada umumnya, pesan dari klien dikirim dalam format SOAP atau REST. SOAP dan REST ini ibarat sebuah amplop yang memuat pesan berupa dokumen XML yang ditransfer di dalam jaringan melalui protokol-protokol standard semacam HTTP. Sedangkan, servis atau respon dari server ke klien direpresentasikan web service dengan format XML, JSON, HTML, CSS, JS atau format lainnya. Tetapi, umumnya dalam bentuk teks format XML, HTML, dan JSON.


14. Apa itu mysql_fetch_Array(), mysql_fetch_row() dan mysql_fetch_assoc() dan jelaskan perbedaannya?
    jawaban:
    Mysql_fetch_array menghasilkan bentuk array berupa numeric atau string (nama field) contoh
    Array {
    $data[0] = 1,
    $data[nim] = 1,
    $data[1] = Arif,
    $data[nama] = Arif,
    }

    Sedangkan mysql_fetch_assoc menghasilkan bentuk array hanya string (nama field) contoh

    Array {
    $data[nim] = 1,
    $data[nama] = Arif,
    }


    Sedangkan mysql_fetch_row menghasilkan bentuk array hanya berupa numeric contoh

    Array {
    $data[0] = 1,
    $data[1] = Arif,
    }
 */