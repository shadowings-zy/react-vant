import * as React from 'react';
import IconBase, { IconBaseProps } from './IconBase';

const SvgIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path
      d="M777.778 111.111c30.682 0 55.555 24.873 55.555 55.556v722.222c0 30.376-24.378 55.057-54.637 55.548l-.918.007H222.222c-30.682 0-55.555-24.873-55.555-55.555V166.667c0-30.683 24.873-55.556 55.555-55.556V888.89h555.556V111.11zm-66.89 279.655l1.608-1.334c.91-.756 2.779-.672 3.376-.062l5.967 6.096c.61.623.557 1.797-.629 3.008l-1.161 1.187c3.48 4.877 2.732 11.643-1.9 16.267L472.58 661.135c-4.321 4.315-10.21 6.082-15.935 5.383-3.013.554-6.37-.443-8.893-3.021l-.888-.905a21.197 21.197 0 01-2.334-2.015L337.485 553.69c-2.045-2.042-3.368-4.561-3.894-7.197a2.995 2.995 0 01-.223-1.65 12.776 12.776 0 012.757-8.93l10.004-12.612c4.1-5.17 11.771-6.468 17.193-2.85l86.587 57.793c4.567 3.049 12.428 2.652 16.692-.808l228.8-185.625c4.38-3.553 10.872-3.823 15.486-1.045zm-322-279.655v55.556H222.223V111.11H388.89zm388.89 0v55.556H611.11V111.11h166.667zm-361.111 0c-15.342 0-27.778 12.437-27.778 27.778s12.436 27.778 27.778 27.778h166.666c15.342 0 27.778-12.437 27.778-27.778s-12.436-27.778-27.778-27.778H416.667zm0-55.555h166.666c46.024 0 83.334 37.31 83.334 83.333 0 46.024-37.31 83.333-83.334 83.333H416.667c-46.024 0-83.334-37.31-83.334-83.333 0-46.024 37.31-83.333 83.334-83.333z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgCompleted = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgCompleted" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgCompleted;
