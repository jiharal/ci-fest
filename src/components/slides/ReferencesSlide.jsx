import { BookOpen } from 'lucide-react';

const ReferenceItem = ({ title, author, year, link = null }) => (
  <motion.div
    initial={{ x: -20, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
  >
    <div className="flex items-start gap-4">
      <BookOpen className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
      <div>
        <h3 className="font-semibold text-lg text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600">{author}</p>
        <p className="text-slate-500 text-sm">{year}</p>
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 text-sm mt-2 inline-block"
          >
            View Resource →
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const ReferencesSlide = () => (
  <Slide id="references" gradient>
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{color: colors.primary}}>
        References
      </h2>
      
      <div className="grid gap-6">
        <ReferenceItem
          title="Refactoring: Improving the Design of Existing Code (2nd Edition)"
          author="Fowler, M."
          year="2019"
        />

        <ReferenceItem
          title="The Go Programming Language Specification"
          author="Team, Go."
          year="2023"
        />

        <ReferenceItem
          title="Best Practices for Library Development in Go"
          author="Anthropic"
          year="2024"
          link="https://blog.golang.org/library-best-practices"
        />

        <ReferenceItem
          title="Casbin: An authorization library that supports access control models"
          author="Casbin Documentation"
          year="2024"
          link="https://casbin.org/docs/"
        />

        <ReferenceItem
          title="Internal Technical Documentation and Standards"
          author="PT Teknologi Kode Indonesia"
          year="2024"
        />
      </div>
    </div>
  </Slide>
);

<ReferencesSlide />