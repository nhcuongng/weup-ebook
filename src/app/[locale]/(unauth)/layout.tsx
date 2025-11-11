import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function UnAuthLayout(props: { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
