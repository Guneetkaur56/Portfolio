import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

export const LeetCode = () => (
  <SectionWrapper>
    <div className="text-center">
      <h2 className={styles.sectionHeadText}>LeetCode Stats.</h2>
      <img
        src="https://leetcard.jacoblin.cool/Guneetkaur56?theme=dark&font=Shippori%20Antique"
        alt="LeetCode stats for Guneetkaur56"
        className="mx-auto mt-8 h-auto max-w-full rounded-xl"
        loading="lazy"
      />
    </div>
  </SectionWrapper>
);
