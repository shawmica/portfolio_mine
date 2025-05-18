import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Mail, MapPin, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    const payload = { ...data, access_key: "6f9d00da-9ecb-4a12-b79a-dfac48add3b1" };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    }).then((res) => res.json());

    if (res.success) {
      form.reset();
      toast({ title: "Message sent!", description: "Thank you for your message. I'll get back to you soon." });
    } else {
      toast({ title: "Submission failed", description: "Please try again later." });
    }

    setIsSubmitting(false);
  }

  return (
    <motion.section id="contact" className="py-16 scroll-mt-16"
      initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.div className="grid gap-8 md:grid-cols-2"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div className="space-y-6"
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Contact Me</h2>
              <p className="text-muted-foreground max-w-2xl mb-6">
                Feel free to get in touch for collaborations or just to say hello. I look forward to connecting with you.
              </p>
            </div>

            <div className="space-y-6">
              {[{ icon: <Mail />, text: "shawmi3030@gmail.com" },
                { icon: <Phone />, text: "+1 (123) 456-7890" },
                { icon: <MapPin />, text: "Jaffna, Sri Lanka" }].map((item, idx) => (
                <motion.div key={idx} whileHover={{ scale: 1.05 }} className="flex items-center space-x-3 text-muted-foreground">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full relative">
                    <span className="absolute inset-0 rounded-full blur-sm bg-blue-500 opacity-30"></span>
                    <div className="relative text-blue-500">{item.icon}</div>
                  </div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Connect with me on social media:</h3>
              <div className="flex space-x-4">
                {[
                  { icon: "instagram", url: "https://www.instagram.com/shawmi__/" },
                  { icon: "linkedin-in", url: "www.linkedin.com/in/shawmica-sivatharan" },
                  { icon: "twitter", url: "https://twitter.com" },
                  { icon: "github", url: "https://github.com/shawmica" },
                ].map((social, idx) => (
                  <a href={social.url} key={idx} target="_blank" rel="noopener noreferrer" className="relative">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full relative">
                      <span className="absolute inset-0 rounded-full blur-sm bg-blue-500 opacity-30"></span>
                      <i className={`fab fa-${social.icon} text-blue-500 relative z-10`}></i>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }} className="relative"
          >
            <div className="absolute inset-0 rounded-2xl blur-[2px] bg-blue-500 opacity-10 z-0"></div>

            <Card className="relative z-10 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 shadow-lg">
              <div className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {["name", "email", "message"].map((field) => (
                      <FormField key={field} control={form.control} name={field as keyof FormValues}
                        render={({ field: fieldProps }) => (
                          <FormItem>
                            <FormLabel>{field.charAt(0).toUpperCase() + field.slice(1)}</FormLabel>
                            <FormControl>
                              {field === "message" ? (
                                <Textarea {...fieldProps} placeholder={`Your ${field}`} className="rounded-xl bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-blue-500 min-h-[120px]" />
                              ) : (
                                <Input {...fieldProps} placeholder={`Your ${field}`} className="rounded-xl bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-blue-500" />
                              )}
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    ))}
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 active:scale-95 transition-transform duration-200" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
