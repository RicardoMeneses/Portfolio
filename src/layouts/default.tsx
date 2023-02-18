import { Ubuntu } from '@next/font/google';
import Header from '@/components/general/Header';
import Footer from '@/components/general/Footer';
import { useRouter } from 'next/router';

const ubuntu = Ubuntu({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const Default = ({ children }: any) => {
  const router = useRouter();
  return (
    <>
      <div className={ubuntu.className}>
        <Header />
        <main>{children}</main>
        {router.pathname !== '/' && <Footer />}
      </div>
    </>
  );
};

export default Default;
