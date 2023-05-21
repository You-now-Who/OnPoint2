import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Post</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} and Let AI Do it's magic
      </p>

      <form
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Template Style
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Describe the Template Style'
            required
            className='form_textarea '
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
          Font Family
          </span>

          <textarea
            value={post.font}
            onChange={(e) => setPost({ ...post, font: e.target.value })}
            placeholder='Name of the font family'
            required
            className='form_input '
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
          Color Paletes
          </span>

          <textarea
            value={post.palete}
            onChange={(e) => setPost({ ...post, palete: e.target.value })}
            placeholder='Color Paletes of your choice'
            required
            className='form_input '
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Keywords{" "}
            <span className='font-normal'>
              (#product, #webdevelopment, #idea, etc.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <Link href={{
            pathname: '/design',
            query: { type: type.toLowerCase() }
          }}
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
            >
            {submitting ? `${type}ing...` : type}
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Form;
