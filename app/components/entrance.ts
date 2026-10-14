// framer-motion's entrance animations set inline opacity/transform; these
// important utilities cancel them below the `sm` breakpoint so content is
// simply visible on phones.
export const noMobileEntrance = "max-sm:opacity-100! max-sm:transform-none!";
