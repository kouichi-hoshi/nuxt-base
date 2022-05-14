import MainHeader from '~/components/MainHeader';

export default {
  title: "MainHeader",
  Component: MainHeader,
};


export const Primary = () => ({
  components: { MainHeader },
  template: '<MainHeader><template #header>title</template></MainHeader>',
});